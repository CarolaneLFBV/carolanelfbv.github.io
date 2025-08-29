<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from "#imports";
const { t } = useI18n();

type FormState = 'idle' | 'loading' | 'success' | 'error'

const formState = ref<FormState>('idle')
const visible = ref(false)
const errors = reactive<Record<string, string>>({})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

onMounted(() => {
  setTimeout(() => visible.value = true, 100)
})

const validateField = (field: keyof typeof formData, value: string) => {
  errors[field] = ''
  
  switch (field) {
    case 'name':
      if (value.length < 2) errors[field] = t('form.errors.nameRequired')
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) errors[field] = t('form.errors.emailInvalid')
      break
    case 'subject':
      if (value.length < 3) errors[field] = t('form.errors.subjectRequired')
      break
    case 'message':
      if (value.length < 10) errors[field] = t('form.errors.messageRequired')
      break
  }
}

async function onSubmit(event: Event) {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  
  Object.keys(formData).forEach(key => 
    validateField(key as keyof typeof formData, formData[key as keyof typeof formData])
  )
  
  if (Object.values(errors).some(error => error)) return
  
  formState.value = 'loading'
  
  try {
    const formDataObj = new FormData(form)
    const response = await fetch('https://formspree.io/f/xeognayr', {
      method: 'POST',
      body: formDataObj,
      headers: { 'Accept': 'application/json' }
    })
    
    if (response.ok) {
      formState.value = 'success'
      form.reset()
      Object.assign(formData, { name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => formState.value = 'idle', 3000)
    } else {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    formState.value = 'error'
    setTimeout(() => formState.value = 'idle', 3000)
  }
}
</script>

<template>
  <section class="py-24 px-4">
    <div 
      class="max-w-xl mx-auto backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden transition-all duration-700 transform"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div 
        class="absolute inset-0 bg-gradient-to-br transition-all duration-500 -z-10"
        :class="{
          'from-white/50 via-white/30 to-transparent': formState === 'idle',
          'from-blue-100/60 via-blue-50/40 to-transparent': formState === 'loading',
          'from-green-100/60 via-emerald-50/40 to-transparent': formState === 'success',
          'from-red-100/60 via-pink-50/40 to-transparent': formState === 'error',
        }"
      />
      
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {{ $t('form.title') }}
        </h2>
        <p class="text-gray-500">{{ $t('form.subtitle') }}</p>
      </div>

      <div v-if="formState !== 'idle'" class="mb-6 p-4 rounded-lg flex items-center gap-3 transition-all duration-300">
        <div v-if="formState === 'loading'" class="bg-blue-50/80 border border-blue-200/60 text-blue-700 w-full">
          <div class="flex items-center gap-3">
            <div class="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            {{ $t('form.states.sending') }}
          </div>
        </div>
        
        <div v-if="formState === 'success'" class="bg-green-50/80 border border-green-200/60 text-green-700 w-full">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {{ $t('form.states.success') }}
          </div>
        </div>
        
        <div v-if="formState === 'error'" class="bg-red-50/80 border border-red-200/60 text-red-700 w-full">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            {{ $t('form.states.error') }}
          </div>
        </div>
      </div>

      <form
        @submit="onSubmit"
        class="space-y-6"
        :class="{ 'pointer-events-none opacity-60': formState === 'loading' }"
      >
        <div class="space-y-1">
          <div class="relative">
            <input
              type="text"
              name="name"
              v-model="formData.name"
              :placeholder="$t('form.name')"
              required
              aria-label="Nom complet"
              @blur="validateField('name', formData.name)"
              @input="errors.name = ''"
              class="w-full rounded-lg px-4 py-3 pr-10 bg-white/90 backdrop-blur-sm border shadow-sm transition-all duration-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-md"
              :class="{
                'border-white/60 focus:ring focus:ring-violet-200/50 focus:border-violet-300': !errors.name,
                'border-red-300 focus:ring focus:ring-red-200/50 focus:border-red-400': errors.name
              }"
            />
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
          <p v-if="errors.name" class="text-sm text-red-600 ml-1 animate-pulse">{{ errors.name }}</p>
        </div>
        <div class="space-y-1">
          <div class="relative">
            <input
              type="email"
              name="email"
              v-model="formData.email"
              :placeholder="$t('form.email')"
              required
              aria-label="Adresse email"
              @blur="validateField('email', formData.email)"
              @input="errors.email = ''"
              class="w-full rounded-lg px-4 py-3 pr-10 bg-white/90 backdrop-blur-sm border shadow-sm transition-all duration-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-md"
              :class="{
                'border-white/60 focus:ring focus:ring-blue-200/50 focus:border-blue-300': !errors.email,
                'border-red-300 focus:ring focus:ring-red-200/50 focus:border-red-400': errors.email
              }"
            />
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <p v-if="errors.email" class="text-sm text-red-600 ml-1 animate-pulse">{{ errors.email }}</p>
        </div>
        <div class="space-y-1">
          <div class="relative">
            <input
              type="text"
              name="subject"
              v-model="formData.subject"
              :placeholder="$t('form.subject')"
              required
              aria-label="Sujet du message"
              @blur="validateField('subject', formData.subject)"
              @input="errors.subject = ''"
              class="w-full rounded-lg px-4 py-3 pr-10 bg-white/90 backdrop-blur-sm border shadow-sm transition-all duration-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-md"
              :class="{
                'border-white/60 focus:ring focus:ring-amber-200/50 focus:border-amber-300': !errors.subject,
                'border-red-300 focus:ring focus:ring-red-200/50 focus:border-red-400': errors.subject
              }"
            />
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"></path>
              </svg>
            </div>
          </div>
          <p v-if="errors.subject" class="text-sm text-red-600 ml-1 animate-pulse">{{ errors.subject }}</p>
        </div>
        <div class="space-y-1">
          <div class="relative">
            <textarea
              name="message"
              v-model="formData.message"
              :placeholder="$t('form.message')"
              required
              aria-label="Message"
              @blur="validateField('message', formData.message)"
              @input="errors.message = ''"
              class="w-full rounded-lg px-4 py-3 pr-10 bg-white/90 backdrop-blur-sm h-40 resize-none border shadow-sm transition-all duration-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-md"
              :class="{
                'border-white/60 focus:ring focus:ring-green-200/50 focus:border-green-300': !errors.message,
                'border-red-300 focus:ring focus:ring-red-200/50 focus:border-red-400': errors.message
              }"
            />
            <!-- Icône message -->
            <div class="absolute right-3 top-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
          </div>
          <p v-if="errors.message" class="text-sm text-red-600 ml-1 animate-pulse">{{ errors.message }}</p>
        </div>

        <div class="flex justify-end gap-4 mt-8">
          <button
            type="reset"
            @click="Object.assign(formData, { name: '', email: '', subject: '', message: '' }); Object.keys(errors).forEach(key => errors[key] = '')"
            class="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 backdrop-blur-sm text-gray-700 rounded-lg border border-gray-300/60 hover:from-gray-200 hover:to-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300/50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="formState === 'loading'"
          >
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              {{ $t('form.clear') }}
            </div>
          </button>
          <button
            type="submit"
            class="px-6 py-3 bg-black text-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-300/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            :disabled="formState === 'loading'"
          >
            <div class="flex items-center gap-2">
              <div v-if="formState === 'loading'" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              {{ formState === 'loading' ? $t('form.states.sending') : $t('form.send') }}
            </div>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>