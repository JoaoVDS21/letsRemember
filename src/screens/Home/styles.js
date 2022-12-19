import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #f0f0f0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`

export const DayRemembers = styled.View`
  width: 90%;
  background: #333;
  border-radius: 10px;
  height: 140px;
  padding: 0 20px;
  justify-content: center;
`
export const DayRemembersTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
`
export const DayRemembersBody = styled.Text`
  width: 100%;
  text-align: center;
  color: #dfdfdf;
  font-size: 14px;
`