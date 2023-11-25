<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\Thought;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
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
    public function followers(User $user, Request $request)
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
    public function store_following(User $user, Request $request)
    {
        $follower = $request->follower_user_id;
        $followed = $request->followed_user_id;


        // if the follower id is auth id the authorization is checked
        Gate::authorize('follow', $follower);

        // $follow = Follow::where([['follower_user_id', '=', $follower], ['followed_user_id', '=', $followed]])->first();
        //!Follow::where([['follower_user_id', '=', $follower], ['followed_user_id', '=', $followed]])->exists()
        if (!Follow::where([['follower_user_id', '=', $follower], ['followed_user_id', '=', $followed]])->exists()) {
            // if the follower id is auth id the authorization is checked
            $test = 1;
            $validated = $request->validate([
                'followed_user_id' => 'required|integer',
                'follower_user_id' => 'required|integer',
            ]);

            $request->user()->following()->create($validated);
        } else {
            // if th
            $test = 2;
            // $request->user()->following()->delete($follow);
            Follow::where([['follower_user_id', '=', $follower], ['followed_user_id', '=', $followed]])->delete();
            // $follow->delete();
        }

        return back();
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
