<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use App\Models\Thought;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
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
        $name = request()->route()->getName();
        if ($name === "profile.followers") {
            $user_id = auth()->id();
            // $user = User::find($user_id)->get()->first();
            $user = auth()->user();
            $follow = false;
            $followed_by = false;
        } else {
            $user_id = $user->id;
            $followed_by = Follow::where([['follower_user_id', '=', $user_id], ['followed_user_id', '=', auth()->id()]])->exists();
            $follow = Follow::where([['follower_user_id', '=', auth()->id()], ['followed_user_id', '=', $user_id]])->exists();
        }

        // finding users who are following $user(These are the followers)
        $followers = User::whereRelation(
            'following',
            'followed_user_id',
            '=',
            $user_id
        )->get();

        return
            Inertia::render('Profile/Followers', [
                'user' => $user,
                'followers' => $followers,
                'follow' => $follow,
                'followed_by' => $followed_by
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function following(User $user)
    {
        $name = request()->route()->getName();
        if ($name === "profile.following") {
            $user_id = auth()->id();
            // $user = User::find($user_id)->get()->first();
            $user = auth()->user();
            $follow = false;
            $followed_by = false;
        } else {
            $user_id = $user->id;
            $followed_by = Follow::where([['follower_user_id', '=', $user_id], ['followed_user_id', '=', auth()->id()]])->exists();
            $follow = Follow::where([['follower_user_id', '=', auth()->id()], ['followed_user_id', '=', $user_id]])->exists();
        }

        $following = User::whereRelation(
            'followers',
            'follower_user_id',
            '=',
            $user_id
        )->get();
        return
            Inertia::render('Profile/Following', [
                'user' => $user,
                'following' => $following,
                'follow' => $follow,
                'followed_by' => $followed_by
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function store_following(User $user, Request $request)
    {
        // TODO: CHANGE ROUTE FOR DELETING FOLLOW
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
        // $request = request()->getRequestUri();
        $name = request()->route()->getName();
        if ($name === "profile.show") {
            $user_id = auth()->id();
            // $user = User::find($user_id)->get()->first();
            $user = auth()->user();
            $follow = false;
            $followed_by = false;
        } else {
            $user_id = $user->id;
            $followed_by = Follow::where([['follower_user_id', '=', $user_id], ['followed_user_id', '=', auth()->id()]])->exists();
            $follow = Follow::where([['follower_user_id', '=', auth()->id()], ['followed_user_id', '=', $user_id]])->exists();
        }
        // $user_id = $user->id;
        $thoughts = Thought::where('user_id', '=', $user_id)->with(['user', 'likes', 'user.followers' => function (Builder $q) {
            $q->where('follower_user_id', '=', auth()->id());
        }])->latest()->limit(5)->get();
        // Inertia::share('user', $user);
        $name = $user->name;
        return
            Inertia::render('Profile/Index', [
                'thoughts' => $thoughts,
                'user' => $user,
                'follow' => $follow,
                'followed_by' => $followed_by
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
