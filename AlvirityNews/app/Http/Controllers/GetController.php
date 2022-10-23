<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\CategoryNews;
class GetController extends Controller
{
    public function actual ()
    {  
        $data = Post::all();
        return response($data);
    }

    public function pagination ()
    {
        $data = Post::paginate(10);
        return response($data);
    }
    public function show(Request $request)
    {
      $data =  Post::find($request->id);
      $category = CategoryNews::all();
      return response(compact('data', 'category'));
        
    }
}
