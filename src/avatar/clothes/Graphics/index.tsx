import React from "react";
import { Selector } from "../../../options";
import { Bat } from "./bat";
import { Bear } from "./bear";
import { Cumbia } from "./cumbia";
import { Deer } from "./deer";
import { Diamond } from "./diamond";
import { Hola } from "./hola";
import { Pizza } from "./pizza";
import { Resist } from "./resist";
import { Selena } from "./selena";
import { Skull } from "./skull";
import { SkullOutline } from "./skull-outline";
import { GraphicsProps } from "./type";

const Graphics: React.FC<GraphicsProps> = ({ maskID, type }: GraphicsProps) => {
  return <Selector defaultKey='Skull' selectedKey={type}>
    <Bat maskID={maskID} key='Bat' />
    <Cumbia maskID={maskID} key='Cumbia' />
    <Deer maskID={maskID} key='Deer' />
    <Diamond maskID={maskID} key='Diamond' />
    <Hola maskID={maskID} key='Hola' />
    <Pizza maskID={maskID} key='Pizza' />
    <Resist maskID={maskID} key='Resist' />
    <Selena maskID={maskID} key='Selena' />
    <Bear maskID={maskID} key='Bear' />
    <SkullOutline maskID={maskID} key='SkullOutline' />
    <Skull maskID={maskID} key='Skull' />
  </Selector>;
};

export default Graphics;