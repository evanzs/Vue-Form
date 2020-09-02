// Templete de Cadastro
<template>
    <div class="container-fluid">

        <h1>  Contato</h1>

        <div class="contato">
            <form> 
                <div class="form-group">
                    <label for="validationCustom01">Nome</label>
                    <input type="text" class="form-control" required>
                </div>
                 <div class="form-group">
                    <label for="validationCustom01">Email</label>
                    <input type="email" class="form-control" required>
                   
                </div>
                <div class="form-group">
                     <textarea class = "form-control" name="" id="" cols="10" rows="10"></textarea>
                </div>
                 <span> 12+5 ?</span>   
                 <input type="text" id ="InputResult" class ="form-control" size ="4" required >    


                <button type="submit" class="btn btn-info"> Enviar </button>
            </form>
        </div>

    </div>
</template>

<style scoped>
 
 .contato
 {
    padding: 5% 20%
 }
 button
 {
     margin-top: 2%;
 }

</style>
<!-- exportanto esse template para fora -->
<script>
export default
 {
    name: 'contact'
}
</script>