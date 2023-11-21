<?php

namespace App\Policies;

use App\Models\Thought;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ThoughtPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->is(auth()->user());
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Thought $thought): bool
    {
        return $user->is(auth()->user());
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->is(auth()->user());
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Thought $thought): bool
    {
        return $thought->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Thought $thought): bool
    {
        return $this->update($user, $thought);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Thought $thought): bool
    {
        return $this->update($user, $thought);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Thought $thought): bool
    {
        return $this->update($user, $thought);
    }
}
