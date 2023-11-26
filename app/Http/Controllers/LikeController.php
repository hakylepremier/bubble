<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;
use App\Models\Like;
use App\Models\Thought;
use App\Models\User;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Inertia\Inertia;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // TODO: Sort by like created_at date
        // TODO: Add the like count 
        $thoughts = Thought::whereHas('likes', function (Builder $query) {
            $query->where('user_id', '=', auth()->id());
        })->with(['user', 'likes', 'user.followers' => function (Builder $q) {
            $q->where('follower_user_id', '=', auth()->id());
        }])->get();

        // possible upgrade to above
        // $posts = Post::whereRelation(
        //     'comments', 'created_at', '>=', now()->subHour()
        // )->get();

        foreach ($thoughts as $thought) {
            $like = $thought->likes();
        }
        return
            Inertia::render('LikePage', [
                'thoughts' => $thoughts,
            ]);
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
    public function store(StoreLikeRequest $request)
    {
        // FIXME: Check if like exists before store
        $validated = $request->validate([
            'thought_id' => 'required|integer',
        ]);

        $request->user()->liked()->create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Like $like)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Like $like)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLikeRequest $request, Like $like)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Like $like)
    {
        // FIXME: Check if like exists before delete
        $this->authorize('delete', $like);

        $like->delete();

        return back();
    }
}
