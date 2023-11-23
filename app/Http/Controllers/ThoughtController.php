<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreThoughtRequest;
use App\Http\Requests\UpdateThoughtRequest;
use App\Models\Thought;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ThoughtController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $thoughts = Thought::where('user_id', '=', auth()->id())->with('user', 'likes')->latest()->get();
        foreach ($thoughts as $thought) {
            $like = $thought->likes();
        }
        return
            Inertia::render('ThoughtPage', [
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
    public function store(StoreThoughtRequest $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request->user()->thoughts()->create($validated);

        return redirect(route('thoughts.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Thought $thought)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Thought $thought)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateThoughtRequest $request, Thought $thought)
    {
        $this->authorize('update', $thought);

        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $thought->update($validated);

        return redirect(route('thoughts.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Thought $thought)
    {
        $this->authorize('delete', $thought);

        $thought->delete();

        return redirect(route('thoughts.index'));
    }
}
