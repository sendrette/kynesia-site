-- Adiciona campos de controle de assinatura e trial na tabela 'profiles' (e 'users' por redundância caso seja o nome usado)

DO $$ 
BEGIN
    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles'
    ) THEN
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS current_plan TEXT DEFAULT 'start';
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive';
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS trial_started_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS next_billing_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS asaas_customer_id TEXT;
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS asaas_subscription_id TEXT;
        ALTER TABLE profiles ADD COLUMN IF NOT EXISTS payment_id TEXT;
    END IF;

    IF EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
    ) THEN
        ALTER TABLE users ADD COLUMN IF NOT EXISTS current_plan TEXT DEFAULT 'start';
        ALTER TABLE users ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive';
        ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_started_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS next_billing_at TIMESTAMP WITH TIME ZONE;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS asaas_customer_id TEXT;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS asaas_subscription_id TEXT;
        ALTER TABLE users ADD COLUMN IF NOT EXISTS payment_id TEXT;
    END IF;
END $$;
