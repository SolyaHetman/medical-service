<template>
    <section class="login mt-5">
        <div class="row">
            <div class="col-md-6 mx-md-auto">
                <div class="card bg-light">
                    <div class="card-body">
                        <h5 class="card-title text-left">Вхід</h5>
                        <hr>
                        <form>
                            <div class="form-group d-flex flex-column align-items-start">
                                <label class="text-left" for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
                            </div>
                            <div class="form-group d-flex flex-column align-items-start">
                                <label class="text-left" for="password">Пароль</label>
                                <input type="password" class="form-control" id="password" placeholder="*******">
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>