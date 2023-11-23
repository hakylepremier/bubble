<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInsightRequest;
use App\Http\Requests\UpdateInsightRequest;
use App\Models\Insight;

class InsightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
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
    public function store(StoreInsightRequest $request)
    {
        $validated = $request->validate([
            'thought_id' => 'required|integer',
            'message' => 'required|string|max:255',
        ]);

        $request->user()->insights()->create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Insight $insight)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Insight $insight)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInsightRequest $request, Insight $insight)
    {
        $this->authorize('update', $insight);

        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $insight->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Insight $insight)
    {
        //
    }
}
