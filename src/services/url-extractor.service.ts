export type ExtractAllFromSpriteResult = {
    id: number | null
    imageName: string | null
    phase: number | null
    skin: string | null
    imageQuality: string
}

export type ExtractAllFromThumbResult = {
    id: number | null
    imageName: string | null
    phase: number | null
    skin: string | null
}

export type ExtractAllFromFlashAnimationResult = {
    id: number | null
    imageName: string | null
    phase: number | null
    skin: string | null
}

export type ExtractAllFromSpineAnimationResult = {
    id: number | null
    imageName: string | null
    phase: number | null
    skin: string | null
}

const urlExtractorService = {
    dragons: {
        extractImageName(url: string): string | null {
            const match = url.match(/\/(basic_|thumb_|ui_)?(\d+)_([\w_]+)/);
            
            if (match) {
                const id = match[2]
                const imageNameWithoutId = match[3]
                const rawImageName = `${id}_${imageNameWithoutId}`
                const voidStr = ""
    
                const imageNameWithSkin = rawImageName.replace(/_\d+/, voidStr)
                const imageNameWithoutSkin = imageNameWithSkin.replace(/_skin\d+/, voidStr)
    
                return imageNameWithoutSkin
            }
    
            return null
        },
        extractId(url: string): number | null {
            const match = url.match(/\/(basic_|thumb_|ui_)?(\d+)_/)
    
            if (match) {
                return Number(match[2])
            }
    
            return null
        },
        extractPhase(url: string): number | null {
            const match = url.match(/(\d+)@2x\.(png|swf)|(\d+)\.(png|swf)|(\d+)_HD_tweened_dxt5.zip|(\d+)_HD_spine-3-8-59_dxt5.zip/)
    
            if (match) {
                return Number(match[1] || match[3] || match[5] || match[6])
            }
    
            return null
        },
        extractSkin(url: string): string | null {
            const match = url.match(/_skin\d+/)
    
            if (match) {
                return match[0]
            }
    
            return null
        },
        extractImageQuality(url: string): string {
            const match = url.match(/@\d+x/)
    
            if (match) {
                return match[0]
            }
    
            return ""
        },
        extractAllFromSprite(url: string): ExtractAllFromSpriteResult {
            return {
                id: this.extractId(url),
                imageName: this.extractImageName(url),
                phase: this.extractPhase(url),
                skin: this.extractSkin(url),
                imageQuality: this.extractImageQuality(url)
            }
        },
        extractAllFromThumb(url: string): ExtractAllFromThumbResult {
            return {
                id: this.extractId(url),
                imageName: this.extractImageName(url),
                phase: this.extractPhase(url),
                skin: this.extractSkin(url)
            }
        },
        extractAllFromFlashAnimation(url: string): ExtractAllFromFlashAnimationResult {
            return {
                id: this.extractId(url),
                imageName: this.extractImageName(url),
                phase: this.extractPhase(url),
                skin: this.extractSkin(url)
            }
        },
        extractAllFromSpineAnimation(url: string): ExtractAllFromSpineAnimationResult {
            return {
                id: this.extractId(url),
                imageName: this.extractImageName(url),
                phase: this.extractPhase(url),
                skin: this.extractSkin(url)
            }
        }
    }
}

export default urlExtractorService