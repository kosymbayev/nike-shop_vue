<template>
    <footer class="footer" id="footer">
        <div class="container">
            <a href="https://github.com/kosymbayev/">
                <box-icon name='github' type='logo' color='#ffffff' ></box-icon>github
            </a>
        </div>
    </footer>
</template>

<style>
.footer {
    background: #111;
    border-bottom: 2px solid #F5F5F5;
    height: 60px;
    margin-top: 30px;
}
.footer .container {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footer a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
}
</style>