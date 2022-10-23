@extends('layout/Main')
@section('content')
<form action = "{{route('user.post.update', $post->id)}}" method="POST" enctype="multipart/form-data">
  @csrf
  @method('patch')
  <div class="mb-3">
  <label for="title" class="form-label">Title</label>
  <input type="string" class="form-control" id="title" placeholder="Введите заголовок..." name = 'title' value = "{{$post->title}}">
</div>
  <div class="mb-3">
  <label for="body" class="form-label">Description</label>
  <input type="string" class="form-control" id="body" placeholder="Введите описание" name = 'body' value = "{{$post->body}}">
</div>
  <div class="mb-3">
<div class="mb-3">
  <label for="author" class="form-label">Author</label>
   <select class="form-select" aria-label="Default select example" id = 'author' name = 'author'>
    <option selected value = "{{session('name')}}">{{session('name')}}</option>
    <option value="Альвирити">Альвирити</option>
   </select>
</div>
<label for="id_category" class="form-label">Category</label>
<select class="form-select" aria-label=".form-select-lg example" name="id_category" >
  @foreach ($categorys as $category)
   <option value="{{$category->id}}">{{$category->name}}</option>
  @endforeach
</select>

<select class="form-select" aria-label=".form-select-lg example" name="id_color" style="margin-top: 20px" >
  @foreach ($colors as $color)
   <option value="{{$color->id}}">{{$color->name}}</option>
  @endforeach
</select>


<div class="input-group mb-3" style="margin-top: 10px;">
  <label class="input-group-text" for="img">Upload</label>
  <input type="file" class="form-control" id="img" name = "img" value="s">
</div>
<div style="display: flex; justify-content: space-between;">
  <button type="submit" class="btn btn-success" style="margin-top: 10px;">Edit</button>
  <a type="button" class="btn btn-primary" href = "{{route('user.post.show', $post->id)}}">Back</a>
</div>

</form>
@endsection()