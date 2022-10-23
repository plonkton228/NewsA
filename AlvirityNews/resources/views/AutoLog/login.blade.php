<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{csrf_token()}}">
	<link rel="stylesheet" type="text/css" href="{{asset('build/assets/app.c0.css')}}">
	<link rel="stylesheet" type="text/css" href="{{asset('styles/style.css')}}">
	<title>Login</title>
</head>
<body>
<form action="{{route('user.login.logs')}}" method="post">
	@csrf
 <div class = "containers">
 	<h1>Авторизация</h1>
  <div class="children_align">
 	 <div class="mb-3">
     <label for="name" class="form-label">Имя</label>
     <input type="string" class="form-control" id="name" placeholder="Введите имя" name = "name">
     @error('name')
     <p class = 'text-danger'>{{$message}}</p>
     @enderror
   </div>
    <div class="mb-3">
    <label for="password" class="form-label">Пароль</label>
    <input class="form-control" id="password" rows="3" placeholder="Введите пароль" name = "password"></input>
   </div>
    <button type="submit" class="btn btn-primary">Войти</button>
  </div>
 
 </div>

</form>

</body>
</html>