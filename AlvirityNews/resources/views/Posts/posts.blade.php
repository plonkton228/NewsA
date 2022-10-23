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
  	@foreach($posts as $post)
    <tr>
      <th scope="row">{{$post->id}}</th>
      <td>{{$post->title}}</td>
      <td>{{$post->body}}</td>
      <td>{{$post->author}}</td>
      <td>  @foreach ($categorys as $category) {{$category->id == $post->id_category ? $category->name : ''}}   @endforeach</td>
      <td>  @foreach ($colors as $color) {{$color->id == $post->id_color ? $color->name : ''}}   @endforeach</td>
      <td>
        <a href="{{route('user.post.show', $post->id)}}"  class="btn btn-success">Show</a>
      </td>
    </tr>
     @endforeach
  </tbody>
</table>
<a type="button" class="btn btn-success" href = "{{route('user.post.create')}}">Create Post</a>


@endsection()