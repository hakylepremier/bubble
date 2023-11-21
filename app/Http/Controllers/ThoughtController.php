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
        // $user = auth()->id();
        // $thoughts1 = User::find(auth()->id())->first()->thoughts->with('user');
        // $thoughts = Thought::where('user_id', '=', auth()->id())->with('user')->get();
        $thoughts = Thought::where('user_id', '=', auth()->id())->with('user')->get();
        return
            Inertia::render('ThoughtPage', [
                // 'thoughts1' => Thought::where('user_id', '=', auth()->id())->with('user')->get(),
                // 'thoughts' => Thought::with('user')->latest()->get(),
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Thought $thought)
    {
        //
    }
}
