<template>
    <div id="contact" class="tm-page-content">
        <div class="tm-black-bg tm-contact-text-container">
            <h2 class="tm-text-primary">Contact Wave</h2>
            <p>Contact Kirolos nabil the owner of Wave cafe (the man who is in love with Js❤️ ) .</p>
        </div>
        <div class="tm-black-bg tm-contact-form-container tm-align-right">
            <form action="" method="POST" id="contact-form">
                <div class="tm-form-group">
                    <input type="text" name="name" class="tm-form-control" placeholder="Name" required />
                </div>
                <div class="tm-form-group">
                    <input type="email" name="email" class="tm-form-control" placeholder="Email" required />
                </div>
                <div class="tm-form-group tm-mb-30">
                    <textarea rows="6" name="message" class="tm-form-control" placeholder="Message" required></textarea>
                </div>
                <div>
                    <button type="submit" class="tm-btn-primary tm-align-right">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    <router-view />
</template>
<script setup>
</script>