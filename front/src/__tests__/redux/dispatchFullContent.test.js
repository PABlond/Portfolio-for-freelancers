import dispatchFullContent from "./../../state/actions/dispatchFullContent"
import constants from "./../../state/constants"
import getFullContent from "./../../services/getFullContent"

describe("actions", () => {
  it("should dispatch all the content needed for the app", async () => {
    const { works, header, about, contact } = await getFullContent()
    const expectedAction = {
      type: constants.getContent.name,
      payload: { works, header, about, contact },
    }
    expect(dispatchFullContent({ works, header, about, contact })).toEqual(expectedAction)
  })
})
