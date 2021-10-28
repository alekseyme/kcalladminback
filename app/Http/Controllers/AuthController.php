<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Неверный логин или пароль'
            ], 401);
        }
        
        $token = $user->createToken($user->username.'_token')->plainTextToken;
        return response()->json([
            'name' => $user->name,
            'username' => $user->username,
            'isadmin' => $user->isadmin,
            'token' => $token,
            'message' => 'Успешный вход'
        ], 200);
    }

    public function logout()
    {
        // auth()->user()->tokens()->delete();
        auth()->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Успешный выход'
        ], 200);
    }
}
