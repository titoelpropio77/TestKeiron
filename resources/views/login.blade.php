<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Simon | Log in</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset( 'plugins/fontawesome-free/css/all.min.css' ) }}">
  <!-- <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css"> -->
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- icheck bootstrap -->
  <!-- <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css"> -->
  <link rel="stylesheet" href="{{ asset( 'plugins/icheck-bootstrap/icheck-bootstrap.min.css' ) }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('plugins/admLte/css/adminlte.min.css')}}">
  <!-- <link rel="stylesheet" href="../../dist/css/adminlte.min.css"> -->
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="#"><b>Keiron</a>
  </div>
  <!-- /.login-logo -->
  <div class="card" id="react-login" >
    <!-- <div class="card-body login-card-body">
      <p class="login-box-msg">Inicia sesión para comenzar</p>

      <div >
      </div>

      
    </div> -->
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->

<!-- jQuery -->
<script src="{{asset('plugins/jquery/jquery.min.js')}}"></script>
<!-- Bootstrap 4 -->
<script src="{{asset('plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('plugins/admLte/js/adminlte.js')}}"></script>
<script> 
    var csrf_token = window.csrf_token = '{{ csrf_token() }}';
</script>
<!-- <script src="{{asset('js/LoginUser.js')}}"></script> -->
<script src="{{asset('js/app.js')}}"></script>

</body>
</html>
