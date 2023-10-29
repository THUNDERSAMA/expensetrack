import { PrismaClient, Prisma } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(req:any) { 
    
    try {
       const jsonar=await req.json();
    console.log(jsonar);
    const {category,name,budget,status}=jsonar;
    let currentYear= new Date().getFullYear(); 
    let currentMonth =new Date().getMonth();
    currentMonth=currentMonth+1;
    let entry: any;
    var s1=currentYear+"";
    s1=s1.trim();
    var s2=currentMonth+"";
    s2=s2.trim();
    entry = {
        category: category,
        year: s1,
        name: name,
        month: s2,
        budget: budget,
        status: status,
      }
      console.log(entry);
      const createUser = await prisma.note.create({ data: entry })
     return NextResponse.json({
       message:createUser,

      }, { status: 200 })
      
    } catch (error) {
        return NextResponse.json({
            message:error,
     
           }, { status: 500 }) 
    }
}