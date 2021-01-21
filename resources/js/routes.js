import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import NotFound from './components/NotFound.vue'

export let routes = [
  { path: '/', component: Profile, meta: { title: 'Ahmed Amged' } },
  { path: '/experience', component: Experience, meta: { title: 'Experience' } },
  { path: '/skills', component: Skills, meta: { title: 'Skills' } },
  { path: '/education', component: Education, meta: { title: 'Education' } },
  { path: '/:path(.*)', component: NotFound }
]
