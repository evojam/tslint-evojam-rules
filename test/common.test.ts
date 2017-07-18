// semicolon
const semicolon = 1;

// ban-types
const obj2: {}
const arr: Array
const bool: Boolean
const num: Number
const obj: Object
const str: String

// member-ordering
class MemberOrdering {
  constructor() {}
  private propa
  public propb
  protected propc
  public static propsa
  private static propsb
  protected static propsc
  private methodb() {}
  public methoda() {}
  protected methodc() {}
  public static methodsa() {}
  private static methodsb() {}
  protected static methodsc() {}
}

// no-any
const any: any