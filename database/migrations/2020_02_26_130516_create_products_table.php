<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('smi_products', function (Blueprint $table) {
            $table->bigIncrements('id')->autoIncrement();
            $table->string('name');
            $table->string('image');
            $table->string('link')->nullable();
            $table->decimal('price', 10, 0);
            $table->decimal('fee_transport', 10, 0);
            $table->decimal('profit', 10, 0);
            $table->decimal('retail', 10, 0);
            $table->integer('percent');
            $table->binary('type');
            $table->integer('category_id');
            $table->decimal('discount', 10, 0);
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
