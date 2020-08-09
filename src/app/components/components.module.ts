/* ------------------ Modules ---------------- */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

/* ------------------ Components ---------------- */

import { BannerComponent } from './banner/banner.component';
import { SpecialCardsComponent } from './special-cards/special-cards.component';
import { OurBestComponent } from './our-best/our-best.component';
import { FeaturesComponent } from './features/features.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { LiveActionsComponent } from './live-actions/live-actions.component';
import { ScreenShotsComponent } from './screen-shots/screen-shots.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MembershipComponent } from './membership/membership.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        BannerComponent,
        SpecialCardsComponent,
        OurBestComponent,
        FeaturesComponent,
        VideoFrameComponent,
        LiveActionsComponent,
        ScreenShotsComponent,
        PricingPlanComponent,
        TestimonialsComponent,
        MembershipComponent,
        TeamComponent,
        ContactUsComponent,
        FooterComponent,
    ],
    imports: [CommonModule, FlexLayoutModule, SharedModule],
    exports: [
        BannerComponent,
        SpecialCardsComponent,
        OurBestComponent,
        FeaturesComponent,
        VideoFrameComponent,
        LiveActionsComponent,
        ScreenShotsComponent,
        PricingPlanComponent,
        TestimonialsComponent,
        MembershipComponent,
        TeamComponent,
        ContactUsComponent,
        FooterComponent,
        SharedModule,
    ],
})
export class ComponentsModule {}
