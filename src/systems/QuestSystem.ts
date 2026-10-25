export type QuestStage = 0 | 1 | 2 | 3;

export class QuestSystem {
  public stage: QuestStage = 0;
  public capturedCount = 0;
  public transferredCount = 0;

  public sync(capturedLength: number): QuestStage {
    this.capturedCount = capturedLength;
    if (this.stage === 3) {
      this.transferredCount = 6;
      return 3;
    }
    if (this.stage >= 1) {
      this.stage = this.capturedCount >= 6 ? 2 : 1;
    }
    return this.stage;
  }
}
