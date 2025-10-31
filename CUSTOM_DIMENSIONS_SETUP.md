# Custom Dimensions Setup Guide for GA4

This guide will help you set up custom dimensions in Google Analytics 4 to track AI referrals, traffic sources, and funnel steps with maximum precision.

## Why Custom Dimensions?

Custom dimensions allow you to:
- **Segment AI traffic** by specific platform (ChatGPT, Claude, Perplexity, etc.)
- **Analyze funnel drop-offs** by traffic source
- **Create custom reports** with your specific tracking parameters
- **Build audiences** for retargeting based on custom criteria

## Step-by-Step Setup

### 1. Access Custom Definitions

1. Log into Google Analytics
2. Click **Admin** (bottom left)
3. Under **Property** column, click **Custom definitions**
4. Click **Create custom dimension**

### 2. Create AI Platform Dimension

**Dimension 1: AI Platform**

- **Dimension name**: `AI Platform`
- **Scope**: `Event`
- **Description**: `The specific AI platform that referred the user (ChatGPT, Claude, Perplexity, etc.)`
- **Event parameter**: `ai_platform`
- Click **Save**

### 3. Create Traffic Type Dimension

**Dimension 2: Traffic Type**

- **Dimension name**: `Traffic Type`
- **Scope**: `Event`
- **Description**: `Category of traffic source (ai_platform, social_media, search_engine, direct, referral)`
- **Event parameter**: `traffic_type`
- Click **Save**

### 4. Create Traffic Source Dimension

**Dimension 3: Traffic Source Detail**

- **Dimension name**: `Traffic Source Detail`
- **Scope**: `Event`
- **Description**: `Detailed traffic source name (e.g., ChatGPT, Instagram, Google)`
- **Event parameter**: `traffic_source`
- Click **Save**

### 5. Create Funnel Step Dimension

**Dimension 4: Funnel Step**

- **Dimension name**: `Funnel Step`
- **Scope**: `Event`
- **Description**: `Current step in the booking funnel`
- **Event parameter**: `funnel_step`
- Click **Save**

### 6. Create Service Name Dimension

**Dimension 5: Service Name**

- **Dimension name**: `Service Name`
- **Scope**: `Event`
- **Description**: `Name of the beauty service viewed or booked`
- **Event parameter**: `service_name`
- Click **Save**

### 7. Create Location Dimension

**Dimension 6: Location Name**

- **Dimension name**: `Location Name`
- **Scope**: `Event`
- **Description**: `Name of the salon or location`
- **Event parameter**: `location_name`
- Click **Save**

### 8. Create Neighborhood Dimension

**Dimension 7: Neighborhood**

- **Dimension name**: `Neighborhood`
- **Scope**: `Event`
- **Description**: `Lisbon neighborhood (Chiado, Baixa, Alfama, etc.)`
- **Event parameter**: `neighborhood`
- Click **Save**

## Custom Dimensions Summary

| # | Dimension Name | Event Parameter | Purpose |
|---|----------------|-----------------|---------|
| 1 | AI Platform | `ai_platform` | Track specific AI platform referrals |
| 2 | Traffic Type | `traffic_type` | Categorize traffic sources |
| 3 | Traffic Source Detail | `traffic_source` | Detailed source identification |
| 4 | Funnel Step | `funnel_step` | Track user journey through funnel |
| 5 | Service Name | `service_name` | Track which services are popular |
| 6 | Location Name | `location_name` | Track which locations are viewed |
| 7 | Neighborhood | `neighborhood` | Track neighborhood interest |

## Using Custom Dimensions in Reports

### Create a Custom Report for AI Traffic

1. Go to **Explore** → **Create new exploration**
2. Choose **Free form** template
3. Add dimensions:
   - AI Platform
   - Traffic Type
   - Country
4. Add metrics:
   - Sessions
   - Conversions
   - Conversion rate
5. Apply filters:
   - Traffic Type = "ai_platform"
6. Save report as "AI Referral Analysis"

### Create a Funnel Report by Traffic Source

1. Go to **Explore** → **Funnel exploration**
2. Set up funnel steps:
   - Step 1: landing_page_view
   - Step 2: browse_services
   - Step 3: view_service_detail
   - Step 4: click_book_button
   - Step 5: contact_form_submit
   - Step 6: booking_complete
3. Break down by:
   - Traffic Type
   - Traffic Source Detail
4. Save report as "Conversion Funnel by Source"

### Create Service Performance Report

1. Go to **Explore** → **Free form**
2. Add dimensions:
   - Service Name
   - Traffic Source Detail
3. Add metrics:
   - Event count
   - Conversions
   - Revenue (if tracking)
4. Save report as "Service Performance by Source"

## Creating Audiences for Retargeting

### Audience 1: AI Platform Visitors

1. Go to **Admin** → **Audiences**
2. Click **New audience**
3. Name: "AI Platform Visitors"
4. Conditions:
   - Traffic Type = "ai_platform"
   - Within last 30 days
5. Save

### Audience 2: Funnel Drop-offs

1. Create new audience
2. Name: "Booking Intent - No Conversion"
3. Conditions:
   - Include: Event name = "click_book_button"
   - Exclude: Event name = "booking_complete"
   - Within last 7 days
4. Save

### Audience 3: High-Value Service Viewers

1. Create new audience
2. Name: "Premium Service Interest"
3. Conditions:
   - Service Name contains "Luxury" OR "Premium" OR "VIP"
   - Event count ≥ 2
   - Within last 14 days
4. Save

## Setting Up Conversions

Mark key events as conversions:

1. Go to **Admin** → **Events**
2. Find these events and toggle "Mark as conversion":
   - ✅ `booking_complete`
   - ✅ `contact_form_submit`
   - ✅ `conversion`
3. These will now appear in conversion reports

## Creating Custom Alerts

Set up alerts for important events:

1. Go to **Admin** → **Custom alerts**
2. Create alert: "AI Referral Spike"
   - Metric: Sessions
   - Dimension: Traffic Type = "ai_platform"
   - Condition: Increases by 50% compared to previous day
   - Send to: Your email
3. Create alert: "Conversion Drop"
   - Metric: Conversions
   - Condition: Decreases by 30% compared to previous day
   - Send to: Your email

## Data Studio Integration (Optional)

For advanced reporting:

1. Go to Google Data Studio (Looker Studio)
2. Create new report
3. Connect to GA4 data source
4. Use custom dimensions in visualizations
5. Create dashboard with:
   - AI traffic trends
   - Funnel visualization
   - Geographic heatmap
   - Service popularity chart

## Verification

After setting up custom dimensions:

1. **Wait 24-48 hours** for data to populate
2. Go to **Reports** → **Engagement** → **Events**
3. Click on any event (e.g., `ai_referral`)
4. You should see your custom dimensions in the event details
5. Go to **Explore** and verify dimensions are available

## Troubleshooting

### Custom Dimension Not Showing Data

- **Wait 24-48 hours** - dimensions need time to collect data
- **Check event parameter names** - must match exactly
- **Verify events are firing** - check Realtime report
- **Check scope** - ensure "Event" scope is selected

### Dimension Not Available in Reports

- **Refresh the page** - sometimes cache needs clearing
- **Check permissions** - ensure you have Editor access
- **Verify dimension is saved** - go back to Custom definitions

## Best Practices

1. ✅ **Use consistent naming** - Keep event parameter names lowercase with underscores
2. ✅ **Document everything** - Keep track of what each dimension measures
3. ✅ **Test before deploying** - Use GA4 DebugView to verify
4. ✅ **Limit dimensions** - GA4 has limits (50 custom dimensions for events)
5. ✅ **Review regularly** - Check if dimensions are still useful

## Expected Results

After implementation and setup, you'll be able to answer questions like:

- **"How many visitors came from ChatGPT vs Claude?"**
  → Check AI Platform dimension

- **"What's the conversion rate for AI referrals vs Google search?"**
  → Compare Traffic Type dimension in funnel report

- **"Which services are most popular among Instagram visitors?"**
  → Cross-reference Traffic Source Detail with Service Name

- **"Where do users drop off in the booking funnel?"**
  → Use Funnel Step dimension in funnel exploration

- **"Which neighborhoods attract the most international visitors?"**
  → Cross-reference Neighborhood with Country dimension

## Next Steps

1. ✅ Set up all 7 custom dimensions
2. ✅ Wait 24-48 hours for data collection
3. ✅ Create custom reports
4. ✅ Set up audiences
5. ✅ Configure alerts
6. ✅ Share reports with team

## Support

If you need help:
- GA4 Documentation: https://support.google.com/analytics/answer/10075209
- Custom Dimensions Guide: https://support.google.com/analytics/answer/10075209
- Community Forum: https://support.google.com/analytics/community

---

**Note**: Custom dimensions are powerful but require consistent implementation. Make sure all tracking code uses the exact same event parameter names as defined in your custom dimensions.

