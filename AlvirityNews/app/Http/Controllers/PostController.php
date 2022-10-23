<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\CategoryNews;
use App\Models\Color;
use COM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class PostController extends Controller
{
    public function index()
    {
       $posts = Post::all();
       $categorys = CategoryNews::all();
       $colors = Color::all();
       return view('Posts.posts', compact('posts', 'categorys', 'colors'));
    }

    public function create()
    {
           $person  = 'Даник';
           $categorys = CategoryNews::all();
           $colors = Color::all();
           return view('Posts.addpost', compact('person', 'categorys', 'colors'));
    }
    public function store()
    {
        $data = request()->validate([
          'title' =>'',
          'body' => '',
          'author' => '',
          'id_category' => '',
          'img' => '',
          'id_color'=> '',

        ]);
        $data['img'] = Storage::put('/images',$data['img']);
        $post = Post::create($data);


        return redirect()->route('user.post.index');
    }

    public function show(Post $post)
    {
        $categorys = CategoryNews::all();
        $colors = Color::all();
        return view('Posts.showpost', compact('post', 'categorys', 'colors'));
    }

    public function edit(Post $post)
    {
        $person  = 'Даник';
        $categorys = CategoryNews::all();
        $colors = Color::all();
        return view('Posts.editpost', compact('post', 'categorys', 'person', 'colors'));
    }

    public function update(Post $post)
    {
      $data = request()->validate([
          'title' =>'',
          'body' => '',
          'author' => '',
          'id_category' => '',
          'img' => '',
          'id_color' => '',

      ]);
       $data['img'] = Storage::put('/images',$data['img']);
       $post->update($data);
       return redirect()->route('user.post.show',$post->id);
    }

    public function delete(Post $post)
    {
         $post->delete();
         return redirect()->route('user.post.index');
    }
}
