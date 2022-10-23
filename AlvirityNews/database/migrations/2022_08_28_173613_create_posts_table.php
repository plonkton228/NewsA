<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('body');
            $table->string('img');
            $table->string('author');

            $table->unsignedBigInteger('id_category')->nullable();
            $table->index('id_category', 'id_category_post_idx');
            $table->foreign('id_category' , 'id_category_post_fk')->on('category_news')->references('id');

            $table->unsignedBigInteger('id_color')->nullable();
            $table->index('id_color', 'id_color_post_idx');
            $table->foreign('id_color', 'id_color_post_fk')->on('colors')->references('id');

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
        Schema::dropIfExists('posts');
    }
};
