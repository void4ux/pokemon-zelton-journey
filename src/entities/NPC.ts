export class NPCEntity {
  constructor(
    public id: string,
    public name: string,
    public sprite: string,
    public x: number,
    public y: number,
    public dir: number,
    public role: string
  ) {}
}
