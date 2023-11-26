<?php

use App\Http\Controllers\InsightController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ThoughtController;
use App\Http\Controllers\UserController;
use App\Models\Like;
use App\Models\Thought;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('thoughts', ThoughtController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('insights', InsightController::class)
    ->only(['index', 'show', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::resource('likes', LikeController::class)
    ->only(['index', 'store', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::get('/home', function () {
    $user_id = auth()->id();
    $thoughts = Thought::where('user_id', '!=', auth()->id())->with(['user', 'likes' => function (Builder $q) {
        $q->where('user_id', '=', auth()->id());
    }, 'user.followers' => function (Builder $q) {
        $q->where('follower_user_id', '=', auth()->id());
    }])->latest()->get();
    foreach ($thoughts as $thought) {
        $like = $thought->likes();
    }
    return Inertia::render('Home', [
        'thoughts' => $thoughts,
    ]);
})->middleware(['auth', 'verified'])->name('home');


Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile/followers', [UserController::class, 'followers'])
        ->name('profile.followers');
    Route::get('/profile/following', [UserController::class, 'following'])
        ->name('profile.following');
    Route::post('/profile/following', [UserController::class, 'store_following'])
        ->name('profile.following.store');
    Route::singleton('profile', UserController::class)->only(['show', 'update']);

    Route::get('/thinker/{user}/followers', [UserController::class, 'followers'])
        ->name('thinker.followers');
    Route::get('/thinker/{user}/following', [UserController::class, 'following'])
        ->name('thinker.following');
    Route::get('/thinker/{user}', [UserController::class, 'show'])->name('thinker.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/settings', [ProfileController::class, 'edit'])->name('settings.edit');
    Route::patch('/settings', [ProfileController::class, 'update'])->name('settings.update');
    Route::delete('/settings', [ProfileController::class, 'destroy'])->name('settings.destroy');
});

require __DIR__ . '/auth.php';
