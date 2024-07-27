<template>
    <div id="contact" class="tm-page-content">
        <div class="tm-black-bg tm-contact-text-container">
            <h2 class="tm-text-primary">Contact Wave Cafe</h2>
            <p>If you have any questions or feedback, feel free to get in touch with us. We would love to hear from you!
            </p>
        </div>
        <div class="tm-black-bg tm-contact-form-container tm-align-right">
            <form action="" method="POST" id="contact-form">
                <div class="tm-form-group">
                    <input type="text" name="name" class="tm-form-control" placeholder="Your Name" required />
                </div>
                <div class="tm-form-group">
                    <input type="email" name="email" class="tm-form-control" placeholder="Your Email" required />
                </div>
                <div class="tm-form-group tm-mb-30">
                    <textarea rows="6" name="message" class="tm-form-control" placeholder="Your Message"
                        required></textarea>
                </div>
                <div>
                    <button type="submit" class="tm-btn-primary tm-align-right">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    <router-view />
</template>

<script setup>
</script>
