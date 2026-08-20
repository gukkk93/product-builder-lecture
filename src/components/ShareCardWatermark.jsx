import { ELEMENT_CHARACTER_SRC } from './ElementCharacter';

// Large, low-opacity character illustration(s) bleeding off the card
// corners — ambient brand texture behind the content, using the full
// mascot art (not just the face) since it reads fine at this scale.
//
// Pass a single-item array for one-person cards (Result/Saju: just "my"
// element). Pass a two-item array for match/compatibility cards so BOTH
// people's energy shows up in the background instead of only one side.
// Parent must be `position: relative; overflow: hidden`.
export default function ShareCardWatermark({ elements }) {
  const [first, second] = elements;

  return (
    <>
      <img
        src={ELEMENT_CHARACTER_SRC[first]}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: second ? 320 : 400,
          height: second ? 320 : 400,
          right: second ? -100 : -120,
          bottom: second ? -90 : -110,
          opacity: 0.22,
          pointerEvents: 'none',
          objectFit: 'contain',
        }}
      />
      {second && (
        <img
          src={ELEMENT_CHARACTER_SRC[second]}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            left: -100,
            top: -90,
            opacity: 0.22,
            pointerEvents: 'none',
            objectFit: 'contain',
          }}
        />
      )}
    </>
  );
}
