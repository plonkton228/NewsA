<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
class RegisterController extends Controller
{
    public function index()
    {
        if(Auth::check())
        {
            return redirect()->route('user.post.index');
        }
        return view('AutoLog.register');
    }


    public function saves ()
    {

        if(Auth::check())
        {

            return redirect()->route('user.post.index');
        }
      
         $data = request()->validate([
          'name' =>'required',
          'password' => 'required',


        ]);

        if(User::where('name' , $data['name'])->exists())
        {
            return redirect(route('user.register.index'))->withErrors([
             'name'=> 'Такой пользователь уже существует'
           ]);

        }
   

        $user = User::create($data);
         if($user)
         {

          Auth::login($user);
          return redirect()->route('user.post.index');
         }
          
        return redirect(route('user.login.index'))->withErrors([
          'formErros'=> 'Не удалось зарегестрировать пользователя',
        ]);


    }
}
