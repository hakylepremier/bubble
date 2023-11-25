<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('follows', function (Blueprint $table) {
            $table->foreignId('followed_user_id');
            $table->foreign('followed_user_id')->on('users')->references('id')->cascadeOnDelete();
            $table->foreignId('follower_user_id')->cascadeOnDelete();
            $table->foreign('follower_user_id')->on('users')->references('id')->cascadeOnDelete();
            $table->primary(['followed_user_id', 'follower_user_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('follows');
    }
};
