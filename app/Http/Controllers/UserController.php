<?php

namespace App\Http\Controllers;

use App\Models\Thought;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function followers(User $user)
    {
        return
            Inertia::render('Profile/Followers', [
                'user' => $user,
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function following(User $user)
    {
        return
            Inertia::render('Profile/Following', [
                'user' => $user,
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function store_following(string $id)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $thoughts = Thought::where('user_id', '=', auth()->id())->with('user', 'likes')->latest()->get();
        return
            Inertia::render('Profile/Index', [
                'thoughts' => $thoughts,
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
