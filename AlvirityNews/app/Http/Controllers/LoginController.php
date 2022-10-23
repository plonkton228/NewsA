<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        if(Auth::check())
        {
            return redirect()->route('user.post.index');
        }
        return view('AutoLog.login');
    }

    public function login()
    {

        if(Auth::check())
        {
            return redirect()->route('user.post.index');
        }

        $data = request()->only(['name', 'password']);
        session(['name' => $data['name']]);

        if(Auth::attempt($data))
        {

            return redirect()->intended(route('user.post.index'));
        }

        return redirect()->route('user.login.index')->withErrors([
          'name' => 'Не удалось войти',
        ]);
    }
}
