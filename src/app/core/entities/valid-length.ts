export class ValidLength {
  private constructor() {}

  public static readonly FullName = {
    Min: 3,
    Max: 50
  } as const;

  public static readonly Password = {
    Min: 8,
    Max: 30
  } as const;

  public static readonly Phone = {
    Length: 10
  } as const;
}