<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;
use Hash;
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
        // $this->middleware( 'client.credentials' );
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    
    /** 
     * Registra al usuario
    */
    public function registerUser( Request $request )
    {
        $validator = Validator::make($request->json()->all() , [
            'nombre' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:usuarios',
            'password' => ['required', 'string', 'min:8', 'confirmed']
        ]);
        if( $validator->fails() ){
            $response = ['error' => $validator->errors(), 'status' => false];
            return response()->json(  $response, 400 );
        }
        $user = User::create([
            'nombre' => $request->json()->get('nombre'),
            'email' => $request->json()->get('email'),
            'pass' => Hash::make( $request->json()->get('password')),
        ]);
      
        return response()->json( [ 'status' =>true , 'message' => 'Se guardo correctamente el usuario'  ]);
    }
}
