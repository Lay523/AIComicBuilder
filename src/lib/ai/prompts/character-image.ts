export function buildCharacterTurnaroundPrompt(description: string, characterName?: string): string {
  return `Character four-view reference sheet. Photorealistic portrait photography, shot on Sony A7R V full-frame mirrorless with 85mm f/1.4 prime lens, professional studio flash + natural fill light. Medium shot (waist to crown of head). NOT illustration, NOT anime, NOT 3D render — strictly photographic realism.

=== CHARACTER DESCRIPTION ===
${characterName ? `Name: ${characterName}\n` : ''}${description}

=== FACE — ULTRA DETAILED ===
Render the face with the following precision:
- Bone structure: defined high cheekbones, sharp clean jawline with visible mandible angle, straight prominent nose bridge with refined tip, naturally arched brows with individual hair strands
- Eyes: large double-lidded eyes, crystalline iris with visible limbal ring, bright natural catchlights (2 o'clock position), slightly wet sclera, full lashes — upper lashes long and separated, lower lashes subtle; gaze is confident yet soft
- Lips: naturally full with defined cupid's bow, slight moisture sheen, micro lip texture visible, corners relaxed — not forced smile
- Skin: porcelain cool-white complexion, luminous subsurface glow, micro pore texture visible at close range, zero blemish but not airbrushed — real skin with natural translucency at ears and nose tip
- Hair: every strand individually rendered, natural volume with gravity-correct drape, specular highlights catching flash light, slight windswept movement for life
- Overall aura: top-tier model face — the kind of face that stops a scroll. Symmetrical yet not uncanny, strikingly beautiful with genuine human warmth

=== WEAPONS & EQUIPMENT (if applicable) ===
- Render weapons, armor, and equipment with full material realism: scratched metal, worn leather, engraved detailing, fabric wrapping on hilts
- Blade weapons: visible edge geometry, fuller grooves, ricasso detail, proper light reflection along the edge
- Firearms: manufacturer-accurate markings, blued or matte finish, mechanical part separation, realistic weight conveyed through posture
- Armor: individual plate edges, rivets, chainmail link separation, leather straps with buckle detail
- All equipment scale must be anatomically correct relative to the character's body

=== FOUR-VIEW LAYOUT ===
Four photographs arranged LEFT to RIGHT on a clean pure white canvas, consistent medium shot (waist to crown) across all four:
1. FRONT — facing camera directly, chin slightly lowered (more attractive angle), arms relaxed at sides showing full outfit and any held weapons
2. THREE-QUARTER — rotated ~45° right, jawline silhouette visible, cheekbone depth apparent, weapon or accessory shown in context
3. SIDE PROFILE — perfect 90° facing right, nose bridge line, lip projection, nape of neck, ponytail or hair fall shown in full; weapon grip or holster clearly visible
4. BACK — fully facing away, hairstyle from behind, shoulder blade line, clothing back detail, any back-mounted weapon or quiver shown

=== PHOTOGRAPHY & LIGHTING ===
- Lens: 85mm f/1.4 at f/2.8 — subject in sharp focus, background (white seamless) with minimal depth-of-field softening
- Lighting: key light slightly above and in front (Rembrandt-adjacent but clean), fill light from opposite side at 50% power, hair light from above-behind for rim separation
- Exposure: slight overexposure (+0.3 EV) for that bright, airy, high-fashion feel — skin glows without blowing out
- Color grade: low saturation, cool-neutral white balance (5500K), subtle golden warmth on highlights only, film-like tonal curve — not HDR, not Instagram filter
- Motion: 1/200s shutter — hair strands may carry the faintest motion blur for natural energy

=== CONSISTENCY ACROSS ALL FOUR VIEWS ===
- Identical face ID in every view — same nose, same eyes, same exact skin tone
- Identical outfit, accessories, weapon placement, hair color
- Heads aligned at the same top edge, waist at the same bottom edge across all four shots
- Natural relaxed expression in all views — personality subtly present

=== CHARACTER NAME LABEL ===
${characterName ? `Display the character's name "${characterName}" as a clean typographic label below the four-view layout. Use a modern sans-serif font, dark text on white background, centered alignment. The name should be clearly legible and presented in a professional reference-sheet style.` : 'No character name label required.'}

=== FINAL OUTPUT STANDARD ===
Indistinguishable from a real professional photo shoot. Ultra-high resolution detail. Zero AI artifacts, zero plastic skin, zero uncanny valley. This is the single canonical reference — all future generated frames MUST reproduce this exact character.`;
}
