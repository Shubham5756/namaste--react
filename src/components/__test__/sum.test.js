import {Sum} from "../Sum";

    test("here we testing Sum component",()=>{
      const result =   Sum(5,10)
      expect(result).toBe(15)
    })
