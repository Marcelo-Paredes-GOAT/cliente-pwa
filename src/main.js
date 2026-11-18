import { createApp } from 'vue'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import './style.css'
import App from './App.vue'
console.log(import.meta.env.VITE_PAGOS_KEY)

// Habilitar componentes de cámara en el navegador
defineCustomElements(window)

createApp(App).mount('#app')
