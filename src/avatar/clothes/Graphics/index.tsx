import React from "react";
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
  if (!type) return <Skull maskID={maskID} key='Skull' />;
  return {
    'Bat': <Bat maskID={maskID} key='Bat' />,
    'Cumbia': <Cumbia maskID={maskID} key='Cumbia' />,
    'Deer': <Deer maskID={maskID} key='Deer' />,
    'Diamond': <Diamond maskID={maskID} key='Diamond' />,
    'Hola': <Hola maskID={maskID} key='Hola' />,
    'Pizza': <Pizza maskID={maskID} key='Pizza' />,
    'Resist': <Resist maskID={maskID} key='Resist' />,
    'Selena': <Selena maskID={maskID} key='Selena' />,
    'Bear': <Bear maskID={maskID} key='Bear' />,
    'SkullOutline': <SkullOutline maskID={maskID} key='SkullOutline' />,
    'Skull': <Skull maskID={maskID} key='Skull' />
  }[type];
};

export default Graphics;