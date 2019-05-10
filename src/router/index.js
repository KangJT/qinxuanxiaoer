import Vue from 'vue'
import Router from 'vue-router'
import SwitchTab from '@/views/switchTab'
import Toolbox from '@/views/toolbox'
import Mine from '@/views/mine'
import Test from '@/views/test'
import Doctor from '@/views/doctor'
import Member from '@/views/member'
import Medicine from '@/views/medicine'
import MedicineDetial from '@/views/medicineDetial'
import EveryDady from '@/views/member/components/EveryDady'
import Childinfo from '@/views/member/views/childinfo'
import Myorder from '@/views/member/views/myorder'
import Integral from '@/views/member/views/integral'
import Drawimg from '@/views/member/views/drawimg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/toolbox'
    },
    {
      path: '/tab',
      name: 'SwitchTab',
      component: SwitchTab,
      children: [
        {
          path: '/toolbox',
          name: 'Toolbox',
          component: Toolbox
        },
        {
          path: '/mine',
          name: 'Mian',
          component: Mine
        },
        {
          path: '/doctor',
          name: 'Doctor',
          component: Doctor
        },
        {
          path: '/member',
          name: ' Member',
          component: Member
        }
      ]
    },
    {
      path: '/active/detail/:id',
      component: Test
    },
    {
      path: '/medicine',
      name: 'Medicine',
      component: Medicine
    },
    {
      path: '/active/medicineDetial/:id',
      name: 'MedicineDetial',
      component: MedicineDetial
    },
    {
      path: '/everyDady',
      name: 'EveryDady',
      component: EveryDady
    },
    {
      path: '/childinfo',
      name: 'Childinfo',
      component: Childinfo
    },
    {
      path: '/myorder',
      name: 'Myorder',
      component: Myorder
    },
    {
      path: '/integral',
      name: 'Integral',
      component: Integral
    },
    {
      path: '/drawimg',
      name: 'Drawimg',
      component: Drawimg
    },
    {
      path: '/icons',
      component: () => import('@/views/icon')
    }
  ]
})
