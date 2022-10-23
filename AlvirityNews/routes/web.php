<?php

use App\Http\Controllers\GetController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\webcontroller;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::name('user.')->group(function (){
    
    Route::get('/login', [LoginController::class, 'index'])->name('login.index');
    Route::get('/registration' , [RegisterController::class, 'index'])->name('register.index');
    Route::post('/registration' , [RegisterController::class, 'saves'])->name('register.save');
    Route::get('/logout', function () {
        Auth::logout();
        return redirect('/');
    })->name('logout.index');
   Route::post('/login' , [LoginController::class, 'login'])->name('login.logs');
   Route::get('/content', [PostController::class, 'index'])->middleware('auth')->name('post.index');
   Route::get('/content/create', [PostController::class, 'create'])->middleware('auth')->name('post.create');
   Route::post('/content', [PostController::class, 'store'])->middleware('auth')->name('post.store');
   Route::get('/content/{post}', [PostController::class, 'show'])->middleware('auth')->name('post.show');
   Route::get('/content/{post}/edit', [PostController::class, 'edit'])->middleware('auth')->name('post.edit');
   Route::patch('/content/{post}', [PostController::class, 'update'])->middleware('auth')->name('post.update');
   Route::delete('/content/{post}',[PostController::class, 'delete'])->middleware('auth')->name('post.delete');


});

Route::get('/getPost', [GetController::class, 'actual'])->name('getPost.actual');
Route::get('/getPostP', [GetController::class, 'pagination'])->name('getPostP.pagination');
Route::get('/getPost/{id}', [GetController::class, 'show'])->name('getPost.show');




 Route::get('/', [webcontroller::class, 'index'])->name('web.index');