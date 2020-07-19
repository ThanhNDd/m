@extends('web.layout.layout')
@section('title', 'Trang chủ')
@section('content')
<!-- ============================================== HEADER : END ============================================== -->
<div id="app">
  @include('web.layout.header')
  <div class="body-content outer-top-vs" id="top-banner-and-menu">
    <div class="container">
        <div class="row">
{{--          <div class="col-xs-12 col-sm-12 col-md-3 sidebar">--}}
{{--            @include('web.page.sidebar.vertical_menu')--}}
{{--            <sidebar-component></sidebar-component>--}}
{{--          </div>--}}
            <!-- ============================================== CONTENT ============================================== -->
            <home-component></home-component>
            <!-- /.homebanner-holder -->
            <!-- ============================================== CONTENT : END ============================================== -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</div>
<!-- /#top-banner-and-menu -->

<!-- ============================================== INFO BOXES ============================================== -->
@include('web.layout.featurebox')
<!-- ============================================== INFO BOXES : END ============================================== -->
  <div>
    <footer-component></footer-component>
  </div>
</div>
@endsection
