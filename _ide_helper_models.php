<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Follow
 *
 * @property int $followed_user_id
 * @property int $follower_user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\FollowFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Follow newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Follow newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Follow query()
 * @method static \Illuminate\Database\Eloquent\Builder|Follow whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Follow whereFollowedUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Follow whereFollowerUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Follow whereUpdatedAt($value)
 */
	class Follow extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Insight
 *
 * @property int $id
 * @property string $message
 * @property int $thought_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Thought $thought
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\InsightFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Insight newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Insight newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Insight query()
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereThoughtId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Insight whereUserId($value)
 */
	class Insight extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Like
 *
 * @property int $id
 * @property int $thought_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $thought
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\LikeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Like newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Like newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Like query()
 * @method static \Illuminate\Database\Eloquent\Builder|Like whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Like whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Like whereThoughtId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Like whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Like whereUserId($value)
 */
	class Like extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Thought
 *
 * @property int $id
 * @property int $user_id
 * @property string $message
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Insight> $insights
 * @property-read int|null $insights_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Like> $likes
 * @property-read int|null $likes_count
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\ThoughtFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Thought newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Thought newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Thought query()
 * @method static \Illuminate\Database\Eloquent\Builder|Thought whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Thought whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Thought whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Thought whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Thought whereUserId($value)
 */
	class Thought extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Follow> $followers
 * @property-read int|null $followers_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Follow> $following
 * @property-read int|null $following_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Insight> $insights
 * @property-read int|null $insights_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Like> $liked
 * @property-read int|null $liked_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Thought> $thoughts
 * @property-read int|null $thoughts_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

