import React from "react";
import { Container, Content } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export default function Groups() {
  return (
    <Container>
      <Content>
        <Header showBackButton />
        <Highlight title="Turmas" subtitle="jogue com a sua turma" />
        <GroupCard title="Turma X" />
        <GroupCard title="Turma Y" />
      </Content>
    </Container>
  );
}
