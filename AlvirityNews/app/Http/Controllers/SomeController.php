<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\CategoryNews;
use Illuminate\Support\Facades\Storage;
class SomeController extends Controller
{
   
   public function index()
    {
       $posts = Post::all();
       $categorys = CategoryNews::all();
    
       return view('Posts.posts', compact('posts', 'categorys'));
    }

    public function create()
    {
           $person  = 'Даник';
           $categorys = CategoryNews::all();
           return view('Posts.addpost', compact('person', 'categorys'));
    }
    public function store()
    {
        $data = request()->validate([
          'title' =>'',
          'body' => '',
          'author' => '',
          'id_category' => '',
          'img' => '',

        ]);
        $data['img'] = Storage::put('/images',$data['img']);
        $post = Post::create($data);


        return redirect()->route('post.index');
    }

    public function show(Post $post)
    {
        $categorys = CategoryNews::all();
        return view('Posts.showpost', compact('post', 'categorys'));
    }

    public function edit(Post $post)
    {
        $person  = 'Даник';
        $categorys = CategoryNews::all();
        return view('Posts.editpost', compact('post', 'categorys', 'person'));
    }

    public function update(Post $post)
    {
      $data = request()->validate([
          'title' =>'',
          'body' => '',
          'author' => '',
          'id_category' => '',
          'img' => '',

      ]);
       $data['img'] = Storage::put('/images',$data['img']);
       $post->update($data);
       return redirect()->route('post.show',$post->id);
    }

    public function delete(Post $post)
    {
         $post->delete();
         return redirect()->route('post.index');
    }

}
