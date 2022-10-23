@extends('layout/Main')
@section('content')


<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Author</th>
      <th scope="col">Category</th>
      <th scope="col">Color</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{$post->id}}</th>
      <td>{{$post->title}}</td>
      <td>{{$post->body}}</td>
      <td>{{$post->author}}</td>
      <td>  @foreach ($categorys as $category) {{$category->id == $post->id_category ? $category->name : ''}}   @endforeach</td>
      <td>  @foreach ($colors as $color) {{$color->id == $post->id_color ? $color->name : ''}}   @endforeach</td>
      <td style="display:flex; justify-content:space-evenly;">
        <form method="post">
          @csrf
          @method('delete')
          <button type="submit" class="btn btn-danger">Delete</button>
        </form>
       <a type="button" class="btn btn-success" href = "{{route('user.post.edit' , $post->id)}}">Edit</a>
      </td>
    </tr>
  </tbody>
</table>
<a type="button" class="btn btn-primary" href = "{{route('user.post.index')}}">Back</a>

@endsection()