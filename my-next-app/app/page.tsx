"use client"
import { useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Comp from'@/components/text';
import Count from'@/components/Counter';
import Effect from '@/components/Effect';
type MenuItem = {
  id: number;
  name: string;
  price: number;
};
function MeNu({menu}:{menu:MenuItem[]}){
  return(
    <ul>
    {menu.map(me => (
      <li key={me.id}>
        <strong>{me.name}</strong> -{me.price}円
      </li>  
    ))}
    </ul>
  )
}
export default function Page(){
  const todayMenu: MenuItem[] = [
    { id: 1, name: "月光ブレンド", price: 500 },
    { id: 2, name: "流星ソーダ", price: 650 },
    { id: 3, name: "銀河ケーキ", price: 800 },
  ];
  return(
    <div>
      <h1>本日のメニュー</h1>
      <MeNu  menu={todayMenu} />
      <Comp />
      <Count />
      <Effect/>
    </div>
  )
}